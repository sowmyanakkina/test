fetch("../data/data.json").then(response=>{
	return response.json()
}).then(data=>{
	console.log(data)
	displayData(data)
})
function displayData(info){
	var bodyElement=document.querySelector("body");
	var row=document.createElement("section")
	row.classList.add("row","justify-content-center");

	bodyElement.append(row);

	info.mobiles.map(value=>{
		var column=document.createElement("article");
		column.classList.add("col-sm-10","col-m-6","col-lg-3");
		row.append(column);

		// Card
		var card=document.createElement("div");
		card.classList.add("card","mt-3");

		//Card body
		var cardBody=document.createElement("div");
		cardBody.classList.add("card-body");


		//Image
		var imageElement=document.createElement("img");
		imageElement.src=value.image;
		imageElement.classList.add("img-responsive");
		imageElement.alt=value.name;

		//name
		var name=document.createElement("h2");
		name.textContent=value.name;
		name.classList.add("text-center","text-primary");

		//price
		var price=document.createElement("p");
		price.classList.add("text-center","text-secondary");
		price.innerHTML="<s>₹"+value.price+"/-</s>";
        

        //original price
        var originalprice=document.createElement("p");
        originalprice.classList.add("text-center","text-primary");
        originalprice.innerHTML="<p>₹"+value.originalprice+"/-</p>";

        
        //button
        var buttonParent=document.createElement("div");
        buttonParent.classList.add("d-grid","gap-2");
        var button=document.createElement("button");
        button.classList.add("btn","btn-primary","btn-block");
        button.textContent="Add to cart"
        buttonParent.append(button);
		




		cardBody.append(imageElement);
		cardBody.append(name);
		cardBody.append(price);
        cardBody.append(originalprice);
        cardBody.append(buttonParent);
		card.append(cardBody);
		column.append(card);
	})

}