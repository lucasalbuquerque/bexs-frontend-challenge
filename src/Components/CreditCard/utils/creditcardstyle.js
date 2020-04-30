const CreditCardStyle = (option) => {
  const flag = {
    'VISA': () => [
      { offset: '0', stopcolor: '#5a7589' },
      { offset: '0.323', stopcolor: '#436175'},
      { offset: '0.549', stopcolor: '#315266' },
      { offset: '1', stopcolor: '#124768' }
    ],
    'MASTER': () => [
      { offset: '0', stopcolor: '#EB001B' },
      { offset: '0.323', stopcolor: '#FF5F00'},
      { offset: '0.549', stopcolor: '#F79E1B' },
      { offset: '1', stopcolor: '#231F20' }
    ],
    'AMEX': () => [
      { offset: '0', stopcolor: '#108168' },
      { offset: '0.200', stopcolor: '#108168' },
      { offset: '1', stopcolor: '#108168' }
    ],
    'DISCOVER': () => [
      { offset: '0', stopcolor: '#86B8CF' },
      { offset: '0.323', stopcolor: '#86B8CF' },
      { offset: '0.549', stopcolor: '#86B8CF' }
    ],
    'DEFAULT': () => [
      { offset: '0', stopcolor: '#bfbfbf'},
      { offset: '0.337', stopcolor: '#a8a8a8'},
      { offset: '1', stopcolor: '#727272'}
    ]
  }
  return (flag[option] || flag['DEFAULT'])();
}

export default CreditCardStyle
