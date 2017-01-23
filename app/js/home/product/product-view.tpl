<div>
	<h3> Fruit Listing </h3>
  <span class="right-align">Enter text to search : <input type="text" ng-model="searchKey"/></span>
  <table align="center" border="1">
	 <tr>
    <th> Product Id </th>
    <th> Product Name </th>
    <th> Description </th>
    <th> Price </th>
    <th> Action </th>
   </tr>
   <tr ng-if="products.length === 0">
    <td class="center">No products to show !</td>
   </tr>
   <tr layout ng-repeat="product in productList | filter : searchKey track by $index">
    <td> {{product.productId}} </td>
    <td> {{product.productName}} </td>
    <td> {{product.description}} </td>
    <td> {{product.price}} </td>
    <td> <input type="button" ng-click="addToCart(product)" value="Add to Cart"> </td>
   </tr>
  </table>
	<a ui-sref="cart">View Cart</a>
</div>

 