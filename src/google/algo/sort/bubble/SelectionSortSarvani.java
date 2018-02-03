package google.algo.sort.bubble;

public class SelectionSortSarvani {
	
	static int testArr[] = {12,3,12,3};

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		printArray(selectionSort(testArr));

	}
	
	public static int[] selectionSort(int[] arr){
		int minNumber, minIndex; int stick=0; int length = arr.length;
		if(arr==null || arr.length==0){
			return new int[]{};
		}
		
		for(int i=0; i<length-1;i++){
			minNumber =arr[i]; minIndex=i;
			for(int j=stick; j<length;j++){
				//find min index
				if(minNumber>arr[j]){
					minNumber = arr[j];
					minIndex = j;
				}
			}
			//swap min number with current place
			int tmp = arr[minIndex];
			arr[minIndex] = arr[i];
			arr[i] = tmp;
			stick++;
		}
		
		return arr;
	}
	
	public static void printArray(int[] a){
		for(int i=0; i<a.length; i++){
			System.out.println(a[i]);
		}
	}

}
