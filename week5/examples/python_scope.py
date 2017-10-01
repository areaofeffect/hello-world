#Learning Python by David Ascher, Mark Lutz

# global scope
X = 99                # X and func assigned in module: global
          
def func(Y):          # Y and Z assigned in function: locals
    # local scope
    Z = X + Y         # X is not assigned, so it's a global
    return Z

func(1)               # func in module: result=100