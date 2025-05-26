import java.util.*;
import java.util.stream.Collectors;

// Define a record
record Person(String name, int age) {}

public class RecordExample {
    public static void main(String[] args) {
        List<Person> people = List.of(
            new Person("Alice", 25),
            new Person("Bob", 17),
            new Person("Charlie", 30)
        );

        System.out.println("All People:");
        people.forEach(System.out::println);

        System.out.println("\nAdults (18+):");
        people.stream()
              .filter(p -> p.age() >= 18)
              .forEach(System.out::println);
    }
}
