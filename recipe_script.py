import pandas as pd
import json
import re
import sys

df2 = pd.read_csv("df2.csv")
df3 = df2[['title', 'NER', 'directions']].reset_index()
df3 = df3.drop(['index'], axis=1)
ingredient_list = ['chicken', 'potato', 'bell pepper', 'milk', 'bread', 'lemon', 'orange']
THRESHOLD = 4
empty_list = []
for i in df3['NER']:
    #print(i)
    #for y in list(i)
    #print()
    empty_list.append(i.strip('[]'))
    
df3['Ingredients'] = empty_list
df3 = df3.drop(['NER'], axis=1)
for i in df3['Ingredients']:
    t = i.strip("'")
    b = t.replace('"', '')
    v = b.split(',')
    #for u in v:
        #print(u)
    #print(v)
    
empty_list = []
for i in df3['Ingredients']:
    t = i.strip("'")
    b = t.replace('"', '')
    v = b.split(',')     
    counter = 0
    for i in v:
        for y in ingredient_list:
            #print(y)
            #print(y in i)
            if y in i:
                counter = counter + 1;
    empty_list.append(counter)
df3['matched_ingredients'] = empty_list
df4 = df3.loc[df3['matched_ingredients'] >= THRESHOLD]

df4.reset_index(drop = True, inplace = True)

print(df4.iloc[0])
print(df4.iloc[1])
print(df4.iloc[3])