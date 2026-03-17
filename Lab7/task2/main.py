

from models import Animal, Dog, Cat


a1 = Animal("Generic", 5, "Unknown")
d1 = Dog("Buddy", 3, "Labrador")
c1 = Cat("Whiskers", 2, "Black")

animals = [a1, d1, c1]


for animal in animals:
    print(animal.info())        
    print(animal.speak())      
    print(animal)               
    print("-" * 20)


print(d1.fetch("ball"))
print(c1.scratch())
