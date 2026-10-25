#!/bin/bash

# Deploy slides (and the week's examples/ folder, if any) to S3 buckets
# Slides go to the bucket root, examples to <bucket>/examples/ so the
# slides can link to live examples.
# Usage: ./deploy-slides.sh [week_number]
# Examples:
#   ./deploy-slides.sh        # deploy all weeks
#   ./deploy-slides.sh 1      # deploy just week 1
#   ./deploy-slides.sh 5      # deploy week5and6/slides to the week5 bucket

set -e  # Exit on error

# Color output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

deploy_week() {
  local week_dir=$1
  local bucket_name=$2

  if [ -d "$week_dir/slides" ]; then
    echo -e "${BLUE}Deploying $week_dir slides to s3://$bucket_name...${NC}"
    # examples/ lives in the same bucket, so keep --delete away from it
    aws s3 sync "$week_dir/slides/" "s3://$bucket_name" --delete --exclude ".DS_Store" --exclude "examples/*"
    if [ -d "$week_dir/examples" ]; then
      echo -e "${BLUE}Deploying $week_dir examples to s3://$bucket_name/examples/...${NC}"
      aws s3 sync "$week_dir/examples/" "s3://$bucket_name/examples/" --delete --exclude ".DS_Store"
    fi
    echo -e "${GREEN}✓ $week_dir deployed successfully${NC}"
    echo ""
  else
    echo "⚠️  Warning: $week_dir/slides directory not found, skipping..."
    echo ""
  fi
}

if [ -z "$1" ]; then
  # Deploy all weeks
  echo "Deploying all week slides..."
  echo ""

  deploy_week "week1" "hello-world-week1"
  deploy_week "week2" "hello-world-week2"
  deploy_week "week3" "hello-world-week3"
  deploy_week "week4" "hello-world-week4"
  deploy_week "week5and6" "hello-world-week5"
  deploy_week "week6" "hello-world-week6"
  deploy_week "week7" "hello-world-week7"

  echo -e "${GREEN}✅ All slides deployed!${NC}"
else
  # Deploy specific week
  week_num=$1

  # Handle week 5 special case (week5and6 folder). Week 6 has its own folder.
  if [ "$week_num" = "5" ]; then
    week_dir="week5and6"
    bucket_name="hello-world-week$week_num"
  else
    week_dir="week$week_num"
    bucket_name="hello-world-week$week_num"
  fi

  deploy_week "$week_dir" "$bucket_name"
  echo -e "${GREEN}✅ Week $week_num slides deployed!${NC}"
fi
