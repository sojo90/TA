<div>
	<h3> Cart Listing </h3>
    <div ng-if="itemList === null">
    	<span class="center-align">No products added to cart !</span>
   	</div>
    <table ng-if="itemList != null" align="center" border="1">
	 <tr>
    <th> Product Id </th>
    <th> Product Name </th>
    <th> Description </th>
    <th> Price </th>
    <th> Count </th>
   </tr>
   
   <tr layout ng-repeat="item in itemList track by $index">
    <td> {{item.productId}} </td>
    <td> {{item.productName}} </td>
    <td> {{item.description}} </td>
    <td> {{item.price}} </td>
    <td> {{item.count}} </td>
   </tr>
  </table>
	<a ui-sref="product">Back to Product page</a>
</div>

 