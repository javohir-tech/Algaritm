class A :
    
    b = 23
    
    def __init__(self , a):
        self.a  = a
        
    @classmethod
    def get_params(cls , param) :
        thisclass = cls(param)
        return [
            thisclass.a , 
            A.b,
            cls.b,
            thisclass.b
            ]
    
print(A.get_params(12))   
    