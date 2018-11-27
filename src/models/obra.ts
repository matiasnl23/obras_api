import { Sequelize, DataTypes } from "sequelize";

const Obra = (db: Sequelize, dt: DataTypes) => {
    return db.define('Obra', {
        // INFORMACIÓN PRINCIPAL
        obra_id: { type: dt.INTEGER, autoIncrement: true, primaryKey: true },
        obra_nombre: dt.STRING,
        obra_cliente: dt.STRING,
        obra_num_presupuesto: dt.STRING,
        obra_descripcion: dt.TEXT,

        obra_tipo: dt.STRING,
        obra_estado: dt.STRING,

        // FECHAS
        obra_fecha_creacion: dt.DATEONLY,
        obra_fecha_cierre: dt.DATEONLY,
        obra_insert_date: dt.DATE,
        obra_update_date: dt.DATE,

        // INFORMACIÓN DEL CLIENTE Y OBRA
        obra_cont_tec: dt.STRING,
        obra_cont_tec_email: dt.STRING,
        obra_cont_comer: dt.STRING,
        obra_cont_comer_email: dt.STRING,
        obra_telefono_cliente: dt.STRING,
        obra_contratista_asignado: dt.STRING,

        // USUARIOS
        user_id_responsable: dt.INTEGER,
        obra_insert_user: dt.INTEGER,
        obra_update_user: dt.INTEGER,

        obra_asis_observaciones: dt.TEXT,
        obra_asis_emitido_por: dt.STRING,
        obra_asis_recibido_por: dt.STRING,
        obra_asis_aprobado_por: dt.STRING,

        obra_orden_compra_nro: dt.STRING,
        obra_plazo_entrega_materiales: dt.STRING,
    }, {
        tableName: 'obras',
    });
};

export default Obra;