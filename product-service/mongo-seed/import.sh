importserver="mongodb:27017"                                                                                                             
importdb="productdb"
collection="products"

echo "importing $collection .."
mongoimport --host $importserver --db $importdb --collection $collection --type json --file /mongo-seed/$collection.json --jsonArray

echo "finish import $collection .."

# mongodb://localhost:27017/productdb?retryWrites=true&connectTimeoutMS=10000