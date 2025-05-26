class Car {
    String make;
    String model;
    int year;

    void displayDetails() {
        System.out.println("Car Make: " + make);
        System.out.println("Model: " + model);
        System.out.println("Year: " + year);
    }
}

public class CarTest {
    public static void main(String[] args) {
        Car myCar = new Car();
        myCar.make = "Toyota";
        myCar.model = "Corolla";
        myCar.year = 2020;

        myCar.displayDetails();
    }
}
