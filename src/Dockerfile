FROM tmvdl/android:app

WORKDIR /app

RUN cordova create app com.brtmvdl.banco banco

WORKDIR /app/app

COPY app/html www

RUN cordova platform add android

RUN cordova build android
