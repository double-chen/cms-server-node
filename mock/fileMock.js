const Mock = require('mockjs');

function uploadImg() {
  return {
    code: 200,
    data: Mock.mock({
      'fileUrl|1': [
        'https://i.imgtg.com/2023/01/16/QRBHS.jpg',
        'https://i.imgtg.com/2023/01/16/QRqMK.jpg',
        'https://i.imgtg.com/2023/01/16/QR57a.jpg',
        'https://i.imgtg.com/2023/01/16/QRa0s.jpg',
      ],
    }),
    msg: '成功',
  };
}

function uploadVideo() {
  return {
    code: 200,
    data: {
      fileUrl: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
    },
    msg: '成功',
  };
}

module.exports = {
  uploadImg,
  uploadVideo,
};
