package google.algos.feb2018;

public class SelectionSortAgain2 {

	public static void main(String[] args) {
		int[] a = {6,3,8,9,1,7};
		int [] result = getSelectionSortAgain2(a);
		
		for(int i=0; i<result.length; i++){
			System.out.println(result[i]);
		}

	}
	
	public static int[] getSelectionSortAgain2 (int[] arr){
		
		if(arr==null || arr.length==0 || arr.length==1){
			return arr;
		}
		
		//Selection sort
		
		for(int i=0; i<arr.length-1; i++){
			
			int minVal = arr[i];
			int minIndex = i;
			
			for(int j=i;j<arr.length; j++){
				//Find min in given array
				if(arr[j]<minVal){
					minVal = arr[j];
					minIndex = j;
				}
				
			}
			//Put the min in the currentPosition
			arr[minIndex] = arr[i];
			arr[i] = minVal;
			
		}
		
		
		return arr;
	}
}
