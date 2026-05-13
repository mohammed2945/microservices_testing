interface Order {
  id: string;
  userId: string;
  items: string[];
  total: number;
  status: 'pending' | 'completed' | 'cancelled';
  createdAt: Date;
}

class OrderService {
  private orders: Order[] = [];

  createOrder(userId: string, items: string[], total: number): Order {
    const order: Order = {
      id: Math.random().toString(36).substr(2, 9),
      userId,
      items,
      total,
      status: 'pending',
      createdAt: new Date(),
    };
    this.orders.push(order);
    return order;
  }

  getOrder(id: string): Order | undefined {
    return this.orders.find(order => order.id === id);
  }

  completeOrder(id: string): Order | null {
    const order = this.orders.find(order => order.id === id);
    if (order) {
      order.status = 'completed';
      return order;
    }
    return null;
  }

  cancelOrder(id: string): Order | null {
    const order = this.orders.find(order => order.id === id);
    if (order) {
      order.status = 'cancelled';
      return order;
    }
    return null;
  }

  getOrdersByUser(userId: string): Order[] {
    return this.orders.filter(order => order.userId === userId);
  }
}

export const orderService = new OrderService();
