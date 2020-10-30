@ECHO ON
echo Script execution is starting

echo Checking folders..... total count 17


set myPath="C:\Mrityunjay\TFG\ACE2020\myWS\foodies\pilets"
set folders=foodies-menu-pilet foodies-login-pilet foodies-home-pilet foodies-checkout-pilet foodies-dynamic-checkout-pilet foodies-dynamic-thanks-pilet foodies-invoice-pilet foodies-myaccount-addresses-pilet foodies-myaccount-favourites-pilet foodies-myaccount-offers-pilet foodies-myaccount-orders-pilet foodies-myaccount-payments-pilet foodies-myaccount-pilet foodies-offers-pilet foodies-resturants-pilet foodies-thanks-pilet foodies-track-orders-pilet 

set loopCount = 0;

cd %myPath%
REM cd foodies-piral
REM TIMEOUT 10
REM node -pe "require('./package.json').version" > %VERSION%
REM echo foodie-piral new version is %VERSION%
REM Set VERSION=%VERSION%:'=%
REM echo foodie-piral new version is %VERSION%
REM cd ..
TIMEOUT 10
for %%n in (%folders%) do (
	loopCount++; 
	echo %%loopCount Upgrading pilet %%n
	pilet upgrade ../dist/emulator/foodies-1.0.5.tgz --target %%n
   cd %%n
   TIMEOUT 5
	echo %%loopCount Deleting dist folder for %%n
	RMDIR /Q/S dist
	TIMEOUT 5
	echo %%loopCount Changing application version of %%n
	npm version patch
	TIMEOUT 5
	echo %%loopCount installing modules of %%n
	npm install
	TIMEOUT 5
	echo %%loopCount Building Application of %%n
	pilet build

	TIMEOUT 5
	
	echo %%loopCount Building Application of %%n
	pilet publish --fresh --url https://feed.piral.cloud/api/v1/pilet/foodies --api-key 3a3a8997e2333b8fa512e363f73200c3cac06bde75c07322a6cdbc78c58ca810

	TIMEOUT 5
	echo moving to root folder
	TIMEOUT 5
	cd ..
)

echo "Ready to Quit."
TIMEOUT 10