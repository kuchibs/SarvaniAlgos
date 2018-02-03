package google.algos.feb2018;

public class SelectionSort {

	public static void main(String[] args) {
		int[] a = {6,3,8,9,1,7};
		int [] result = getSelectionSort(a);
		
		for(int i=0; i<result.length; i++){
			System.out.println(result[i]);
		}

	}
	
	public static int[] getSelectionSort(int[] arr){
		
		//find smallest of all 
		//keep repeating for n-1
		
		int minIndex = 0;
		int stick = 0;
		
		for(int i=0; i<arr.length-1; i++){
			int minNumber = arr[i]; minIndex=i;
			
			for(int j=stick; j<arr.length; j++){
				
				if(arr[j] < minNumber){
					minNumber = arr[j];
					minIndex = j;
				} 
			}
			//int buf = arr[minIndex];
			arr[minIndex] = arr[i];
			arr[i] = minNumber;
			stick++;
			
		}
		
		
		
		return arr;
	}

}
