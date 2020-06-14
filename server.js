const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extented: true }));

app.get('/api/customers', (req, res) => {
    res.send([
        {
          'id' : 1,
          'image' : 'https://placeimg.com/64/64/1',
          'name' : '홍길동',
          'birthday' : '961222',
          'gender' : '남자',
          'job' : '대학생'
        },
        {
          'id' : 2,
          'image' : 'https://placeimg.com/64/64/2',
          'name' : '나천재',
          'birthday' : '780123',
          'gender' : '여자',
          'job' : '연구원'
        },
        {
          'id' : 3,
          'image' : 'https://placeimg.com/64/64/3',
          'name' : '김두한',
          'birthday' : '600111',
          'gender' : '남자',
          'job' : '조폭'
        }
        ]
    )
}
)

app.listen(port, () => console.log(`Listening on port ${port}`));