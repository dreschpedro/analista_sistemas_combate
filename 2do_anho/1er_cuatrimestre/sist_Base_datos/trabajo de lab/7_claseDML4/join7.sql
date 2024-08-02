select pedidos.idpedido,pedidos.fechapedido,pedidos.importe,
clientes.idcliente,clientes.nombrecontacto,clientes.ciudad,
detalles_de_pedidos.idproducto,detalles_de_pedidos.preciounidad,detalles_de_pedidos.cantidad, (detalles_de_pedidos.preciounidad * detalles_de_pedidos.cantidad) as ImporteTotalProducto,
productos.idproducto,productos.nombreproducto,productos.`idcategoría`
from clientes
join pedidos on clientes.idcliente = pedidos.idcliente
join detalles_de_pedidos on pedidos.idpedido = detalles_de_pedidos.idpedido
join productos on detalles_de_pedidos.idproducto = productos.idproducto
where (productos.nombreproducto like "%Cerveza%") and (pedidos.fechapedido between "1996-01-01" and "1996-12-31")
order by detalles_de_pedidos.cantidad desc