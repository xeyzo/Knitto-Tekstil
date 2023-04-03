SELECT 
customerNumber 
FROM 
classicmodels.orderdetails
INNER JOIN classicmodels.orders ON classicmodels.orderdetails.orderNumber = classicmodels.orders.orderNumber
INNER JOIN classicmodels.products ON classicmodels.orderdetails.productCode = classicmodels.products.productCode
WHERE productLine = 'Classic Cars' AND quantityOrdered > 23
;

-- use dbeaver