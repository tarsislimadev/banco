FROM tmvdl/android:app

WORKDIR /app

RUN cordova create banco com.brtmvdl.banco banco

WORKDIR /app/banco

COPY app/html www

RUN cordova platform add android

RUN cordova build android
