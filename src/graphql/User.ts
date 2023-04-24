import {objectType} from "nexus";

export const User = objectType({
    name:"User",
    definition(t) {
        t.nonNull.int("id");
        t.nonNull.string("name")
        t.nonNull.string("email");
        //non-nullable array of Link type objects.
        t.nonNull.list.nonNull.field("links", {
            type:"Link",
            resolve(parent,args,context) {
                return context.prisma.user
                    .findUnique({where: {id:parent.id}})
                    .links();
            }
        })
    }
})