export default function handler(요청, 응답) {
    console.log(123)
    응답.status(200).json('처리완료함')
  }