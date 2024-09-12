import { Schema, model, models } from "mongoose";

export interface MailDocument {
  email: string;

}

const MailSchema = new Schema<MailDocument>({
  email: {
    type: String,
    unique: true,
    required: [true, "Email is required"],
  },
}, {
  timestamps: true,
});

const Mail = models.Mail || model<MailDocument>('Mail', MailSchema);
export default Mail;
