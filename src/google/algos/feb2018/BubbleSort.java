package google.algos.feb2018;

public class BubbleSort {

	public static void main(String [] args){
		
		int[] a = {6,3,8,9,1,7};
		int [] result = getBubbleSort(a);
		
		for(int i=0; i<result.length; i++){
			System.out.println(result[i]);
		}
		
	}
	
	
	public static int[] getBubbleSort(int[] arr){
		
		if(arr == null || arr.length ==0 || arr.length ==1){
			return  arr;
		}
		
		int buff = 0; 
		int point = arr.length-1;
		
		for(int i=0; i<arr.length-1; i++){
		
			for(int j=0; j<arr.length-1-i; j++){
				if(arr[j+1] < arr[j]){
					buff = arr[j+1];
					arr[j+1] = arr[j];
					arr[j] = buff;
				}
			}
		}
		
		
		
		
		return arr;
		
	}
	
	
	/*
	public static int[] getBubbleSort(int[] arr){
		
		
		
		if(arr == null || arr.length ==0 || arr.length ==1){
			return  arr;
		} else if (arr.length==2){
			int buff = 0;
			if(arr[1]<arr[0]){
				buff = arr[1];
				arr[1] = arr[0];
				arr[0] = buff;
			}
			return arr;
		} else {
			return getBubbleSort(arr[]) //CAN WE DO RECURRSION IN BUBBLE SORT????
		}
		
		return null;
		
		
	}*/
	
	
	
	
	/*
	public static int[] getBubbleSort(int[] arr1){
		
		
		//1,2,3,4,5,6,7,8  x location
		
		if(arr1 == null || arr1.length ==0){
			return null;
		}
		
		int loc =0; int buff = 0; 
		
		for(int i=0; i < arr1.length-1; i ++){
			loc = i;
			if(arr1[i+1]<arr1[i]){
				buff = arr1[i+1];
				arr1[i+1] = arr1[i];
				arr1[i] = buff;
			}
		}
		
		
		
		return arr1; 
	}*/
}
