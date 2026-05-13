import { config } from './config';
import { userService } from './services/user.service';
import { orderService } from './services/order.service';

class Application {
  constructor() {
    console.log(`Starting ${config.APP_NAME}`);
    console.log(`Environment: ${config.ENVIRONMENT}`);
  }

  run(): void {
    // Demo: Create users
    const user1 = userService.createUser('John Doe', 'john@example.com');
    const user2 = userService.createUser('Jane Smith', 'jane@example.com');
    console.log('Created users:', userService.getAllUsers());

    // Demo: Create orders
    const order1 = orderService.createOrder(user1.id, ['item1', 'item2'], 99.99);
    const order2 = orderService.createOrder(user2.id, ['item3'], 49.99);
    console.log('Created orders:', orderService.getOrdersByUser(user1.id));

    // Demo: Complete order
    orderService.completeOrder(order1.id);
    console.log('Completed order:', orderService.getOrder(order1.id));

    // Demo: Get user details
    console.log('User details:', userService.getUser(user1.id));
  }
}

const app = new Application();
app.run();
