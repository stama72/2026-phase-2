import * as v from "valibot";

export function validateMailSchema(
	mail: string
) {
  const MailSchema = v.pipe(
	  v.string(),
	  v.email("メールアドレスの形式が正しくありません"),
    v.regex(/@((fuji|asagi|toki|moegi|akane|ruri|suou)\.)?waseda\.jp$/i, "早稲田メールの形式ではありません"),
  )
  return v.safeParse(MailSchema, mail)
}
