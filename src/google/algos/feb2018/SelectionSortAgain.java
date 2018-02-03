package google.algos.feb2018;

public class SelectionSortAgain {

	public static void main(String[] args) {
		
		int[] a = {6,3,8,9,1,7};
		int [] result = getSelectionSort(a);
		
		for(int i=0; i<result.length; i++){
			System.out.println(result[i]);
		}

	}
	
	public static int[] getSelectionSort(int[] arr){
		
		//Selection sort - select the smallest number, move it to place 1
		for (int i = 0; i < arr.length-1; i++) {
			int minNumber = arr[i];
			int minIndex = i ;
			
			for(int j=i; j<arr.length; j++){ //currentPosition is i
				//find min number in array
				if(arr[j]<minNumber){
					minNumber = arr[j];
					minIndex = j;
				}
			}
			//Swap min number and curr position
			arr[minIndex] = arr[i];
			arr[i] = minNumber;
		}
		
		
		return  arr; 
	}

}
