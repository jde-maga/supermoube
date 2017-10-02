/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   parseStatus.js                                     :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Julien de Magalhaes <julien@cinq-s.com>    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/10/02 14:54:14 by Julien de M       #+#    #+#             */
/*   Updated: 2017/10/02 14:54:44 by Julien de M      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const parseStatus = (status) => {
  if (status === 'waiting_to_start') return 'Prêt';
  if (status === 'creating_group') return 'Créé un groupe';
  if (status === 'searching_a_group') return 'Cherche un groupe';
  if (status === 'in_progress') return 'Inscrit';
  if (status === 'waiting_for_correction') return 'En correction';
  if (status === 'finished') return 'Complété';
  return status;
};

export default parseStatus;
