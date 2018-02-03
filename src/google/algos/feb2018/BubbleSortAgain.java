package google.algos.feb2018;

public class BubbleSortAgain {

	public static void main(String[] args) {

		//int[] a = {6,3,8,9,1,7};
		int[] a = {1, 9, 1};
		int [] result = getBubbleSortAgain(a);
		
		for(int i=0; i<result.length; i++){
			System.out.println(result[i]);
		}
		

	}
	
	public static int[] getBubbleSortAgain(int[] arr){
		
		
		if(arr==null || arr.length==0 || arr.length==1){
			return arr;
		}
		
		
		for(int i=0; i<arr.length-1; i++){
			for(int j=0; j<arr.length-1-i; j++){
				
				//sort 2 numbers
				if(arr[j+1]<arr[j]){
					int buf = arr[j+1];
					arr[j+1] = arr[j];
					arr[j] = buf;
				}
			}
		}
		
		return arr;
	}

}
