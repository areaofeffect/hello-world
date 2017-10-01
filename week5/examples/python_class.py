class Pokemon:

      def __init__(self, name, health):
  
          self.name = name
          self.health = health
          
      def updateHealth(self, num):
          self.health += num
      
      def sayHello(self):
        print "hello i'm", self.name
          
pikachu = Pokemon("pikachu", 100)
pikachu.sayHello()

squirtle = Pokemon("squirtle", 100)
squirtle.sayHello()