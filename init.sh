
echo "starting cart-service .."
cd cart-service
docker-compose up -d
cd ..

echo "starting product-service .."
cd product-service
docker-compose up -d
cd ..

echo "all the services is running .."

echo "starting product-cart-api .."
cd product-cart-api
npm run start:dev

echo "api is running .."
