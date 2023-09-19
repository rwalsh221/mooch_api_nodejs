exports.test = async (request, response) => {
  console.log('LLALALALALLALALALALALA');
  try {
    const data = await fetch(
      'http://localhost/mooch_be_dev/athlete/?userId=sH48pYkgACaDpnXJ2I06W2IE97c2'
    );
    const dataRes = await data.json();

    await response.json({
      status: 'success',
      message: 'data successfully retrived',
      data: dataRes,
    });
  } catch (err) {
    response.json({
      status: 'error',
      message: err.message,
    });
  }
};