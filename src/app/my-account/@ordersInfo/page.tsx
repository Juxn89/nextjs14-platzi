import { getCustomerOrders } from "@/services/shopify/graphql/customer";

interface IOrdersInfo {
	orders?: OrdersType[]
}

type OrdersType = {
	orderNumber: string,
}

export default async function MyAccountPage() {
  const ordersInfo: IOrdersInfo = await getCustomerOrders();

  return (
    <div>
      <section>
        <h2>Orders</h2>
        {ordersInfo.orders?.map((order) => (
          <p key={order.orderNumber}>{order.orderNumber}</p>
        ))}
      </section>
    </div>
  );
}