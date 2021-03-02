import { json } from 'co-body'

export async function status(
  ctx: Context,
  next: () => Promise<any>
  ) {

  console.log('wait code')
  const body  = await json(ctx.req)
  console.log(body);

  // console.info('Received code:', code)

  // const statusResponse = await statusClient.getStatus(code)

  // console.info('Status response:', statusResponse)

  // const {
  //   headers,
  //   data,
  //   status: responseStatus,
  // } = await statusClient.getStatusWithHeaders(code)

  // console.info('Status headers', headers)
  // console.info('Status data:', data)

  // ctx.status = responseStatus
  // ctx.body = data
  // ctx.set('Cache-Control', headers['cache-control'])

  await next()
}
