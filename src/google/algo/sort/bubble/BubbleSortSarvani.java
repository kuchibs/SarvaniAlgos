package google.algo.sort.bubble;

public class BubbleSortSarvani {

	static int testArr[] = {2,7,21,5,1,0};
	
	public static void main(String[] args) {
		
		System.out.println("22,43,66,38,99,1,20,13");
		
		printArray(bubbleSort2(testArr));
			
	}
	
	public static int[] bubbleSort2(int[] arr){
		//With out using the stick
		
		//int stick = arr.length-1;
		int buffer;
		
		if(arr==null ||arr.length==0){
			return new int[]{};
		}
		for(int i=0; i<arr.length-1; i++){
			
			for(int j=0; j<arr.length-1-i;j++){
				//sort a,b
				if(arr[j+1] < arr[j]){
					buffer = arr[j+1];
					arr[j+1] = arr[j];
					arr[j] = buffer;
				}
			}
		}
		return arr;
	}
	
	public static int[] bubbleSort(int[] arr){
		
		int stick = arr.length-1;
		int buffer;
		
		if(arr==null ||arr.length==0){
			return new int[]{};
		}
		while(stick!=0){
			
			for(int i=0; i<stick;i++){
				//sort a,b
				if(arr[i+1] < arr[i]){
					buffer = arr[i+1];
					arr[i+1] = arr[i];
					arr[i] = buffer;
				}
			}
			stick--;
		}
		return arr;
	}
	

	public static void printArray(int[] a){
		for(int i=0; i<a.length; i++){
			System.out.println(a[i]);
		}
	}
	

}
