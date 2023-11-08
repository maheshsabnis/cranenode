/* Import MsSql */

import sql from 'mssql';

/* defiane a class with a static method for establishing conection with database */

class DbConnect {
    static async IsConnected(){
        const connection = await sql.connect('Server=127.0.0.1;Database=eShoppingCodi;User Id=sa;Password=MyPass@word;Encrypt=false;TrustServerCertificate=true');
        return connection.connected;
    }
}

export {DbConnect};