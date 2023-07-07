import { Prop } from "@nestjs/mongoose";
import { Types } from "mongoose";

export class DTOTemplate {
    @Prop({ select: false, })
    _id: Types.ObjectId;

    @Prop({ select: false, })
    __v: Types.ObjectId;

    @Prop({ select: false, })
    createdAt: Types.ObjectId;

    @Prop({ select: false, })
    updatedAt: Types.ObjectId;
}