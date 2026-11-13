
// function double(value) {
//   console.log('start!');
//   setTimeout(() => setTimeout(console.log, 0, value * 2), 5000);
// }
// double(3);

// function double(value, callback) {
//   setTimeout(() => {
//     callback(value * 2)
//   }, 1000)
// }
// double(3, (x) => console.log(`I was given: ${x}`));
// // I was given: 6（大约 1000 毫秒之后）

// function double(value, success, failure) {
//   setTimeout(() => {
//     try {
//       if (typeof value !== 'number') {
//         throw 'Must provide number as first argument';
//       }
//       success(2 * value);
//     } catch (e) {
//       failure(e);
//     }
//   }, 1000);
// }
// const successCallback = (x) => console.log(`Success: ${x}`);
// const failureCallback = (e) => console.log(`Failure: ${e}`);
// double(3, successCallback, failureCallback);
// double('b', successCallback, failureCallback);
// // Success: 6（大约 1000 毫秒之后）
// // Failure: Must provide number as first argument（大约 1000 毫秒之后）


// function double(value, success, failure) {
//   setTimeout(() => {
//     try {
//       if (typeof value !== 'number') {
//         throw 'Must provide number as first argument';
//       }
//       success(2 * value);
//     } catch (e) {
//       failure(e);
//     }
//   }, 1000);
// }
// const successCallback = (x) => {
//   double(x, (y) => console.log(`Success: ${y}`));
// };
// const failureCallback = (e) => console.log(`Failure: ${e}`);
// double(3, successCallback, failureCallback);
// // Success: 12（大约 1000毫秒之后）


// callback hell
function getUser(userId, cb) {
  setTimeout(() => {
    if (!userId) return cb(new Error('userId 为空'));
    console.log('  [1] getUser 完成');
    cb(null, { id: userId, name: 'Alice' });
  }, 300);
}
function getOrders(userId, cb) {
  setTimeout(() => {
    console.log('  [2] getOrders 完成');
    cb(null, [
      { id: 'o-100', amount: 99 },
      { id: 'o-101', amount: 200 },
    ]);
  }, 300);
}
function getOrderDetail(orderId, cb) {
  setTimeout(() => {
    console.log('  [3] getOrderDetail 完成');
    cb(null, { id: orderId, items: ['book', 'pen'] });
  }, 300);
}

console.time('总耗时');

getUser('u-1', (err, user) => {
  if (err) return console.error(err);
  console.log('user =', user);

  getOrders(user.id, (err, orders) => {
    if (err) return console.error(err);
    console.log('orders =', orders);

    getOrderDetail(orders[0].id, (err, detail) => {
      if (err) return console.error(err);
      console.log('user =', user)
      console.log('orders =', orders)
      console.log('detail =', detail);
      console.timeEnd('总耗时');
    });
  });
});
