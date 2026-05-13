export function buyCake(quantity)
{
    return  {               //This Object here is the Actual Action
        type:BUY_CAKE,
        payload: quantity || 1
    }
}

export function restoreCake(quantity)
{
    return{                     //This Object here is the Actual Action
        type:RESTORE_CAKE,
        payload: quantity || 1
    }
}