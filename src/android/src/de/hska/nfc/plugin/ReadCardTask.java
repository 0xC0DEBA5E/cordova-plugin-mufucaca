/*
 * This file is part of KITCard Reader.
 * Ⓒ 2012 Philipp Kern <phil@philkern.de>
 *
 * KITCard Reader is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2 of the License, or
 * (at your option) any later version.
 *
 * KITCard Reader is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with KITCard Reader. If not, see <http://www.gnu.org/licenses/>.
 */

package de.hska.nfc.plugin;

/**
 * ReadCardTask: Read an NFC tag using the Wallet class asynchronously.
 * <p>
 * This class provides the glue calling the Wallet class and passing
 * the information back to the Android UI layer. Detailed error
 * information is not provided yet.
 *
 * @author Philipp Kern <pkern@debian.org>
 */

import android.nfc.Tag;
import android.nfc.tech.MifareClassic;
import android.os.AsyncTask;
import android.util.Log;

import de.hska.nfc.plugin.Wallet.ReadCardResult;

public class ReadCardTask extends AsyncTask<Tag, Integer, Pair<ReadCardResult, Wallet>> {

    private AsyncResultInterface resultDelegate;

    public ReadCardTask(AsyncResultInterface resultDelegate) {
        super();
        this.resultDelegate = resultDelegate;
    }

    protected Pair<ReadCardResult, Wallet> doInBackground(Tag... tags) {
        MifareClassic card = null;
        try {
            card = MifareClassic.get(tags[0]);
        } catch (NullPointerException e) {
            /* Error while reading card. This problem occurs on HTC devices from the ONE series with Android Lollipop (status of June 2015)
             * Try to repair the tag.
			 */
            card = MifareClassic.get(MifareUtils.repairTag(tags[0]));
        }

        if (card == null)
            return new Pair<ReadCardResult, Wallet>(null, null);

        final Wallet wallet = new Wallet(card);
        final ReadCardResult result = wallet.readCard();
        return new Pair<ReadCardResult, Wallet>(result, wallet);
    }

    protected void onPostExecute(Pair<ReadCardResult, Wallet> data) {

        Log.d("ReadCardTask", "Card successfully read");
        if (data.getValue0() == ReadCardResult.SUCCESS)
            resultDelegate.onReadFinished(data);
    }
}
