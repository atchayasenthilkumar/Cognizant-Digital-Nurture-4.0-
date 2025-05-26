// 31. Basic JDBC Connection with SQLite
import java.sql.*;

public class JDBCExample {
    public static void main(String[] args) {
        String url = "jdbc:sqlite:students.db";
        String query = "SELECT * FROM students";

        try (Connection conn = DriverManager.getConnection(url);
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(query)) {

            while (rs.next()) {
                System.out.println(rs.getInt("id") + ", " + rs.getString("name"));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}

