// 33. Transaction Handling in JDBC
class TransactionExample {
    public void transfer(Connection conn, int fromId, int toId, double amount) throws SQLException {
        conn.setAutoCommit(false);
        try {
            String debit = "UPDATE accounts SET balance = balance - ? WHERE id = ?";
            String credit = "UPDATE accounts SET balance = balance + ? WHERE id = ?";

            try (PreparedStatement ps1 = conn.prepareStatement(debit);
                 PreparedStatement ps2 = conn.prepareStatement(credit)) {

                ps1.setDouble(1, amount);
                ps1.setInt(2, fromId);
                ps1.executeUpdate();

                ps2.setDouble(1, amount);
                ps2.setInt(2, toId);
                ps2.executeUpdate();

                conn.commit();
            }
        } catch (SQLException e) {
            conn.rollback();
            throw e;
        } finally {
            conn.setAutoCommit(true);
        }
    }
}

