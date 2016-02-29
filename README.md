# Why?
每次看電影，把電腦和TV都連好了，在sofa上坐著看。
有時候有電話來或者想去廁所都懶得去電腦前按space停一下電影又或者有時候電影聲音不一樣。
所以需要調大調小。這兩個是我最需要的功能，所以簡單做了一個remote來用。

## App UI
<img src="https://raw.githubusercontent.com/tobiaslei/laptopremote/master/screenshot.png">


## Start the server

```bash
npm install #install dependencies
node app.js
```

> 之後有空可以包裝一下，每次開機都自己啟動

## APIs
> BASE_URL is your computer's IP

- Change the volume of your computer

``
BASE_URL:8310/volume?v=VALUE
``

> VALUE from range 0 to 100

- Press the spacebar
``
BASE_URL:8310/space
``



