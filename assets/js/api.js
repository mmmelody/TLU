var theta=1; //threshold
var train_x=[];
var train_y=[];
var weight=[];
var alpha=0.03; // learning rate
var input=[];
function train(train_x,train_y,weight,theta,alpha){
	var i=0;
	while(i<train_x.length){
		var output=TLU(train_x[i],weight,theta);
		if(train_y[i]!=output){
			for(j=0;j<train_x[i].length;j++)
				weight[j]+=alpha*(train_y[i]-output)*train_x[i][j];
			i=0;
		}
		i++;
	}
	return weight;
} 

function TLU(input,weight,theta){
	var i;
	var activative=0; // summation
	for(i=0;i<input.length;i++){
		if(input[i])
			activative+=weight[i];
	}
	if(activative>theta)
		return 1;
	else
		return 0;
}