import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/client'

import Mongo from 'services/mongo'

import User from 'models/User'

import { PostUserTransactions } from 'types'

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const session = await getSession({ req: request })

  const { body, method } = request
  const { email } = session.user

  await Mongo()

  switch (method) {
    case 'GET':
      try {
        const userResponse: PostUserTransactions = await User.findOne({
          email
        })

        const { input, output, total, transactions } = userResponse

        return response.status(200).json({ input, output, total, transactions })
      } catch (error) {
        return response.status(400).json(error)
      }

    case 'POST':
      try {
        const hasUser: PostUserTransactions = await User.findOne({ email })

        let input = 0
        let output = 0

        if (body.type === 'Depósito') {
          input += Number(body.value)
        } else {
          output += Number(body.value)
        }

        if (!hasUser) {
          const createdTransaction = await User.create({
            email,
            transactions: [body],
            input,
            output,
            total: input - output
          })

          return response.status(201).json(createdTransaction)
        } else {
          const {
            _id,
            transactions: oldTransactions,
            input: oldInput,
            output: oldOutput
          } = hasUser

          const updatedTransaction = await User.findOneAndUpdate(
            { _id },
            {
              transactions: [body, ...oldTransactions],
              input: input + oldInput,
              output: output + oldOutput,
              total: input + oldInput - (output + oldOutput)
            }
          )

          return response.status(201).json(updatedTransaction)
        }
      } catch (error) {
        return response.status(400).json({ ...error })
      }

    default:
      break
  }
}
