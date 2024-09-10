export type EventTypes = "order_created" | "order_refunded" | "subscription_created" | "subscription_updated" | "subscription_cancelled" | "subscription_resumed" | "subscription_expired" | "subscription_paused" | "subscription_unpaused" | "subscription_payment_success" | "subscription_payment_failed" | "subscription_payment_recovered" | "subscription_payment_refunded" | "license_key_created" | "license_key_updated"

export interface ICheckOutBody{
    data:{
        type:string,
        attributes:{
            checkout_data:{
                custom:{
                    user_id:string,
                    user_email:string
                }
            },

        },
        relationships:{
            store:{
                data:{
                    types:string,
                    id:string
                }
            },
            variant: {
                data: {
                  type: string,
                  id: string
                }
              }
        }
    }
}