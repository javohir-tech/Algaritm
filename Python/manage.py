def avto_info(kompaniya :str , model:str , **kwargs):
    kwargs['kompaniya'] = kompaniya
    kwargs['model'] = model
    return kwargs

print(avto_info("porche" , "911" , year = 1988 , color = "red" , km = 1234))
