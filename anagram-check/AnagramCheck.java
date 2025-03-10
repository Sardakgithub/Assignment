import java.util.Arrays;
import java.util.Scanner;

public class AnagramCheck {
    public static boolean isAnagram(String str1, String str2) {
        char[] charArray1 = str1.replaceAll("\\s", "").toLowerCase().toCharArray();
        char[] charArray2 = str2.replaceAll("\\s", "").toLowerCase().toCharArray();
        Arrays.sort(charArray1);
        Arrays.sort(charArray2);
        return Arrays.equals(charArray1, charArray2);
    }

    public static void main(String[] args) {
        try (Scanner scanner = new Scanner(System.in)) {
            System.out.println("Enter first string:");
            String str1 = scanner.nextLine();
            System.out.println("Enter second string:");
            String str2 = scanner.nextLine();
            System.out.println("Anagram: " + isAnagram(str1, str2));
        }
        catch (Exception e) {
        }
    }
}