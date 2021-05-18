# Nespresso

### Installation:-

```

git clone https://github.com/isGaad/nespresso

cd nespresso

npm install

//update DB connection configurations
nano app/config.js

//loading seeds
node seeds.js 

//launching server
node server.js

```
![image](https://user-images.githubusercontent.com/6369399/118681066-90dedc00-b7ff-11eb-89e9-5d68ea02153c.png)

### Available endpoints:-

###Pods
```
/api/pods
```
### Pods Filters
```
/api/pods?size={small, large or espresso}
/api/pods?flavor={caramel, vanilla, mocha .. etc}
/api/pods?dozens={1, 3, 5, 7}

//we can also merge filters together to narrow the results

/api/pods?dozens=1&flavor=caramel

    
```
### Machines

```
/api/pods
```
### Machines Filters
```

/api/machines?model={premium, base or deluxe}
/api/machines?size={small, large, espresso}
/api/machines?water_line={true or false}

//we can also merge filters together to narrow the results

/api/machines?size=small&water_line=true



```