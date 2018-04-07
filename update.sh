rm build-webpack-nodejs.tgz

cd ../devkit 
yarn build
cd dist/@angular-devkit/build-webpack-nodejs
yarn
cd ../../../
cp dist/@angular-devkit_build-webpack-nodejs.tgz ../nodejs_target_demo/build-webpack-nodejs.tgz
